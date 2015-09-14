class ListDrama < ActiveRecord::Base
  belongs_to :drama 
  belongs_to :list 
 
end