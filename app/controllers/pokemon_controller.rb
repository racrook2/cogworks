class PokemonController < ApplicationController
  def index
    json = ::Pokemon
      .includes(:abilities)
      .includes(:types)
      .left_joins(join_clause)
      .where(where_clause)
      .map(&:details)

    render json: json
  end

  def show
    render json: ::Pokemon.includes(:abilities).includes(:types).find(params[:id]).details
  end

  private

  # TODO: Extract to service and expand
  def join_clause
    tables = conditions.each_with_object([]) do |(_, condition), memo|
      attr = condition['attr'].to_sym

      if [:types, :abilities].include?(attr) && memo.exclude?(attr)
        memo << attr.to_sym
      end
    end

    tables.uniq
  end

  def where_clause
    return unless conditions.present?

    queries = conditions.map do |_, condition|
      "#{column_for(condition['attr'])} #{symbol_for(condition['operator'])} '#{condition['val']}'"
    end

    queries.join(' AND ')
  end

  def column_for(attr)
    if ['types', 'abilities'].include?(attr)
      return "#{attr}.name"
    end

    attr
  end

  def symbol_for(operator)
    case operator
    when 'eq', 'between'
      '='
    when 'gte'
      '>='
    when 'lte'
      '<='
    else
      raise
    end
  end

  def conditions
    conditions_str = params[:conditions]

    return {} unless conditions_str.present?

    JSON.parse(conditions_str)
  end
end
