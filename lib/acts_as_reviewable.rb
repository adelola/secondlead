module ActsAsReviewable
  # The named scopes are:
  # in_order: Returns reviews in the order they were created (created_at ASC).
  # recent: Returns reviews by how recently they were created (created_at DESC).
  # limit(N): Return no more than N reviews.
  module Review

    def self.included(review_model)
      review_model.extend Finders
      review_model.scope :in_order, -> { review_model.order('created_at ASC') }
      review_model.scope :recent, -> { review_model.order('created_at DESC') }

    end

    module Finders
      # Helper class method to lookup all reviews assigned to a given user.
      def find_reviews_by_user(user_id)
        where(["reviewer_id = ?", user_id]).order("created_at DESC")
      end

      # Helper class method to lookup all reviews assigned to a given drama.
      def find_reviews_for_drama(drama_id)
        where(["drama_id = ?", drama_id]).order("created_at DESC")
      end

    end
  end
end