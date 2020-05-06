class EvosPrevo < ::ApplicationRecord
  belongs_to :prevo, class_name: ::Pokemon.to_s
  belongs_to :evo, class_name: ::Pokemon.to_s
end
