CREATE TABLE projects (
	project_id UUID NOT NULL PRIMARY KEY,
	project_name VARCHAR(50) NOT NULL,
	description VARCHAR(500),
	date_created DATE NOT NULL
)

CREATE TABLE priority (
	priority_id UUID NOT NULL PRIMARY KEY,
	priority_type VARCHAR(15) NOT NULL CHECK(priority_type = 'low' OR priority_type = 'med' OR 
		priority_type = 'high' OR priority_type = 'urgent')
	priority_image_url VARCHAR(50) NOT NULL,
	UNIQUE (priority_type),
	UNIQUE (priority_image_url)
)

CREATE TABLE roles (
	role_id UUID NOT NULL PRIMARY KEY,
	role_title VARCHAR(30)
)

CREATE TABLE users (
	user_id UUID NOT NULL PRIMARY KEY,
	role_id REFERENCES roles (role_id),
	profile_name VARCHAR(25),
	user_fName VARCHAR(15) NOT NULL,
	user_lName VARCHAR(15) NOT NULL,
	password VARCHAR(100) NOT NULL,
	email VARCHAR(50) NOT NULL,
	last_login TIMESTAMPTZ NOT NULL,
	UNIQUE (profile_name),
	UNIQUE (email),
)

CREATE TABLE status (
	status_id UUID NOT NULL PRIMARY KEY,
	status_name VARCHAR(20) NOT NULL CHECK(status_name = 'unassigned' OR status_name = 'assigned'
		OR status_name = 'closed'),
	status_image_url VARCHAR(50) NOT NULL,
	UNIQUE (status_name),
	UNIQUE (status_image_url)
)

CREATE TABLE issues ( 
	issue_id UUID NOT NULL PRIMARY KEY,
	project_id REFERENCES projects (project_id),
	priority_id REFERENCES priority (priority_id),
	user_id REFERENCES users (user_id),
	status_id REFERENCES status (status_id),
	title VARCHAR(100) NOT NULL,
	description VARCHAR(1000),
	estimated_completion_date DATE,
	report_date TIMESTAMPTZ NOT NULL,
	last_edit_date TIMESTAMPTZ,
	author VARCHAR(50) NOT NULL,
	UNIQUE(title) --Not sure about this
)

CREATE TABLE user_token ( --Could be a different data type/ IDK if they are unique or not null
	token_id UUID NOT NULL PRIMARY KEY,
	user_id REFERENCES users (user_id),
	ip_address VARCHAR(50), 
	browser_id VARCHAR(100), 
	time_issued TIMESTAMPTZ,
	time_expires TIMESTAMPTZ
)

CREATE TABLE comments (
	comment_id UUID NOT NULL PRIMARY KEY,
	issue_id REFERENCES issues (issue_id),
	user_id REFERENCES users (user_id),
	description VARCHAR(500) NOT NULL,
	report_date TIMESTAMPTZ NOT NULL,
	edit_date TIMESTAMPTZ,
)

CREATE TABLE user_projects (
	user_id REFERENCES users (user_id) PRIMARY KEY,
	project_id REFERENCES projects (project_id) PRIMARY KEY,
	project_lead REFERENCES users (user_id), --Should this be in projects table?
	user_assign_date DATE NOT NULL,
	user_exit_date DATE
)

CREATE TABLE assignees (
	user_id REFERENCES users (user_id) PRIMARY KEY,
	issue_id REFERENCES issues (issue_id) PRIMARY KEY
)