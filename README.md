## what
データベース設計をREADMEに記述しました。
## why
chat-spaeのデータベース設計をするため。



## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|integer|null: false, foreign_key: true|
|password|integer|null: false, foreign_key: true|
|email|integer|null: false, foreign_key: true|

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
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group