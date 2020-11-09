select
	u1.id,
	u1.username,
	u2.username as parent_user_name
from
	users as u1
left join users as u2 on
	u2.id = u1.parent_id;