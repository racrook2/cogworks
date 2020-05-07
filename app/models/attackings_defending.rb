class AttackingsDefending < ::ApplicationRecord
  belongs_to :attacking, class_name: ::Type.to_s
  belongs_to :defending, class_name: ::Type.to_s
end
