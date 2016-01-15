--1. Document  Type
--—————————————————————————————————
select 
doc_type_id as 'doc_type_id',
doc_type_name as 'doc_type_name',
'' as  'doc_type_is_office',
isnull(created_by,1000) as 'doc_type_created_by',
created_date as 'doc_type_created_date',
last_update_by as  'doc_type_last_update_by',
last_update_date as  'doc_type_last_update_date',
status as 'doc_type_is_active'
from 
pm_document_type

--2. Document Status
--—————————————————————————————————
select 
doc_status_id as 'doc_status_id',
doc_status_name as 'doc_status_name',
'' as 'doc_status_description',
created_by as 'doc_status_created_by',
created_date as 'doc_status_created_date',
last_update_by as 'doc_status_last_update_by',
last_update_date as 'doc_status_last_update_date',
status as 'doc_status_is_active'
from pm_document_status

--3. Document folders
--——————————————
select 
  doc_cat_id as 'folder_id',
  parent_doc_cat_id as 'parent_folder_id',
  name  as 'folder_name',
  comments as 'folder_comment',
  status as  'folder_status',
  created_by as 'folder_created_by',
  created_date as 'folder_created_date',
  last_update_by as 'folder_updated_by',
  last_update_date as 'folder_updated_date',
  '' as 'folder_breadcrumb' 
from 
pm_document_categories
where status='active'

--4. Documents
--————————————
select 
document_id             as 'doc_id', 
doc_type_id             as 'doc_type_id',
0                       as 'doc_level',
doc_status_id           as 'doc_status_id',
company_id              as 'usr_company_id',
location_id             as 'usr_location_id',
''                      as 'viewer_list_array',
1000                    as 'user_id',
case when status='Active' then 1  else 0 end   as 'doc_is_active',
isnull(privacy_document_yn, 0)  as 'doc_is_private',
title                   as 'doc_title',
doc_applicability       as 'doc_applicability',
author                  as 'doc_author',
''                      as 'doc_change_request',
created_by              as 'doc_created_by',
created_date            as 'doc_created_date',
description             as 'doc_description',
display_folders         as 'doc_display_folders',
expiration_date         as 'doc_expiration_date',
main_folder             as 'doc_folder_id',
issued_date             as 'doc_issued_date',
keywords                as 'doc_keywords',
last_update_by         as 'doc_last_updated_by',
last_update_date       as 'doc_last_updated_date',
''                      as 'doc_location',
doc_physical_loc        as 'doc_location_physical',
modified_by             as 'doc_modified_by',
modified_date           as 'doc_modified_date',
''                      as 'doc_owner',
''                      as 'doc_parent',
''                      as 'doc_permalink',
retention_period        as 'doc_retention_period',
''                      as 'doc_review_date',
''                      as 'doc_status_by',
documentstatuscomment   as 'doc_status_comment',
documentstatusdate      as 'doc_status_date',
''                      as 'doc_url',
documentversion         as 'doc_version',
''                      as 'ext_regulatory_ref',
''                      as 'ext_reference_documents',
resource_type           as 'ext_resource_type',
''                      as 'ext_website_author',
file_location           as 'file_location',
file_name               as 'file_name',
file_size               as 'file_size',
file_type               as 'file_type',
uploaded_by             as 'file_uploaded_by',
isnull(uploaded_date,getdate()) as 'file_uploaded_date',
''                      as 'mod_references',
getdate() as 'view_date_time' 

from pm_documents

where status='Active'