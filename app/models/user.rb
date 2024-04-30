class User < ApplicationRecord
    has_secure_password

    validates :first_name, presense: true
    validates :last_name, presense: true
    validates :email, presense: true, uniqueness: { case_sensitive: false }
    validates :password, presense: true, length: {in: 6..30}
end
