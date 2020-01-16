
## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|
|password|string|null: false, foreign_key: true|
|email|string|null: false, foreign_key: true|

### Association
- has_many :messages
- has_many :groups, through: :groups_users

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|groups_name|string|null: false, foreign_key: true|


### Association
- has_many :messages
- has_many :users, through: :groups_users

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: false, foreign_key: true|
|image|string|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|user_id|	integer|null: false, foreign_key: true|


### Association
- belongs_to :user
- belongs_to :group

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group