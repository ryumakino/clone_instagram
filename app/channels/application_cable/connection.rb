module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      self.current_user = find_cerified_user
    end

    private

    def find_cerified_user
      verified_user = env['warden'].user

      verified_user || reject_unauthorized_connection
    end
  end
end
