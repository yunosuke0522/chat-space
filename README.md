## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|integer|null: false, foreign_key: true|
|password|integer|null: false, foreign_key: true|
|email|

### Association
- has_many :messages
- has_many :groups, through: :groups_users

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|groups_users|integer|null: false, foreign_key: true|


### Association
- has_many :messages
- has_many :users, through: :groups_users

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|messages|integer|null: false, foreign_key: true|
|image|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|

### Association
- has_many :groups
- has_many :users