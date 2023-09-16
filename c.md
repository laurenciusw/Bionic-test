result 1
select distinct item from asset

result 2

select user_id, string_agg(item, ',') from asset
group by user_id
