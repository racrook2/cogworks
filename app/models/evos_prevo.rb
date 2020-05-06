class EvosPrevo < ::ApplicationRecord
  belongs_to :prevo, class_name: ::Pokemon.to_s
  belongs_to :evo, class_name: ::Pokemon.to_s

  class << self
    def evolutions
      ::ActiveRecord::Base.connection.execute("
        WITH
          pokemon_1 AS (
            #{pokemon_cte}
          ),
          pokemon_2 AS (
            #{pokemon_cte}
          ),
          evos_prevos_1 AS (
            #{evos_prevos_cte}
            WHERE evos_prevos.prevo_id NOT IN (
              SELECT evos_prevos.evo_id
              FROM evos_prevos
            )
          ),
          evos_prevos_2 AS (
            #{evos_prevos_cte}
            WHERE evos_prevos.prevo_id IN (
              SELECT evos_prevos.evo_id
              FROM evos_prevos
            )
          )
        SELECT
          evos_prevos_1.pokemon_1_id AS basic_id,
          evos_prevos_1.pokemon_1_name AS basic_name,
          evos_prevos_1.pokemon_1_subname AS basic_subname,
          evos_prevos_1.pokemon_1_type_1 AS basic_type_1,
          evos_prevos_1.pokemon_1_type_2 AS basic_type_2,
          evos_prevos_1.level AS level_1,
          evos_prevos_1.method AS method_1,
          evos_prevos_1.pokemon_2_id AS stage_1_id,
          evos_prevos_1.pokemon_2_name AS stage_1_name,
          evos_prevos_1.pokemon_2_subname AS stage_1_subname,
          evos_prevos_1.pokemon_2_type_1 AS stage_1_type_1,
          evos_prevos_1.pokemon_2_type_2 AS stage_1_type_2,
          evos_prevos_2.level AS level_2,
          evos_prevos_2.method AS method_2,
          evos_prevos_2.pokemon_2_id AS stage_2_id,
          evos_prevos_2.pokemon_2_name AS stage_2_name,
          evos_prevos_2.pokemon_2_subname AS stage_2_subname,
          evos_prevos_2.pokemon_2_type_1 AS stage_2_type_1,
          evos_prevos_2.pokemon_2_type_2 AS stage_2_type_2
        FROM evos_prevos_1
        LEFT JOIN evos_prevos_2
          ON evos_prevos_2.pokemon_1_id = evos_prevos_1.pokemon_2_id
      ")
    end

    private

    def pokemon_cte
      "
        WITH
          type_1 AS (
            #{types_cte(0)}
          ),
          type_2 AS (
            #{types_cte(1)}
          )
        SELECT
          pokemon.id,
          pokemon.name,
          pokemon.subname,
          type_1.name AS type_1,
          type_2.name AS type_2
        FROM pokemon
        JOIN type_1
          ON type_1.pokemon_id = pokemon.id
        LEFT JOIN type_2
          ON type_2.pokemon_id = pokemon.id
      "
    end

    def evos_prevos_cte
      '
        SELECT
          pokemon_1.id AS pokemon_1_id,
          pokemon_1.name AS pokemon_1_name,
          pokemon_1.subname AS pokemon_1_subname,
          pokemon_1.type_1 AS pokemon_1_type_1,
          pokemon_1.type_2 AS pokemon_1_type_2,
          evos_prevos.level,
          evos_prevos.method,
          pokemon_2.id AS pokemon_2_id,
          pokemon_2.name AS pokemon_2_name,
          pokemon_2.subname AS pokemon_2_subname,
          pokemon_2.type_1 AS pokemon_2_type_1,
          pokemon_2.type_2 AS pokemon_2_type_2
        FROM evos_prevos
        JOIN pokemon_1
          ON pokemon_1.id = evos_prevos.prevo_id
        JOIN pokemon_2
          ON pokemon_2.id = evos_prevos.evo_id
      '
    end

    def types_cte(sort)
      "
        SELECT pokemon_types.pokemon_id, types.name
        FROM types
        JOIN pokemon_types
          ON pokemon_types.type_id = types.id
        WHERE pokemon_types.sort = #{sort}
      "
    end
  end
end
