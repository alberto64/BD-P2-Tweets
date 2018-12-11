-- Add new parameters to creates

-- Create Hashtag Table
create table hashtags(time string, id string, words string, users string) row format delimited fields terminated by ',';
-- Create Keyword Table
create table keywords(time string, id string, words string, users string) row format delimited fields terminated by ',';
-- Create User/Trending Keywords Table
create table users(time string, id string, words string, users string) row format delimited fields terminated by ',';

-- Import hashtag info
load data inpath '/home/alberto/Data/hashtagsWord.csv' into table hashtags;
-- Import keyword info
load data inpath '/home/alberto/Data/keywordsWord.csv' into table keywords;
-- Import user/trending keyword info
load data inpath '/home/alberto/Data/usersWord.csv' into table users;

-- Save hashtag query to file
INSERT OVERWRITE DIRECTORY '/home/alberto/output/hashtags' row format delimited fields terminated by ',' select lower(words), count(words) as total from hashtags where instr(words, '#') > 0 group by lower(words) order by total desc;

-- Save Keyword query to file
INSERT OVERWRITE DIRECTORY '/home/alberto/output/keywords' row format delimited fields terminated by ',' select lower(words), count(words) as total from keywords where lower(words)=='flu' OR lower(words)=='zika' OR lower(words)=='diarrhea' OR lower(words) == 'ebola' OR lower(words)=='headache' OR lower(words)=='measles' group by lower(words) order by total desc;

-- Save Trending Keyword query to file
INSERT OVERWRITE DIRECTORY '/home/alberto/output/trending' row format delimited fields terminated by ',' select lower(words), count(words) as total from users where lower(words)<>'the' AND lower(words)<>'"' AND lower(words)<>'' AND lower(words)<>' ' AND lower(words)<>'to' AND lower(words)<>'a' AND lower(words)<>'and' AND lower(words)<>'i' AND lower(words)<>'e' AND lower(words)<>'of' AND lower(words)<>'o' AND lower(words)<>'l' AND lower(words)<>'you' AND lower(words)<>'r' AND lower(words)<>'t' AND lower(words)<>'is' AND lower(words)<>'in' AND lower(words)<>'s' AND lower(words)<>'n' AND lower(words)<>'on'  AND lower(words)<>'-'  AND lower(words)<>'m' AND lower(words)<>'b' AND lower(words)<>'be' AND lower(words)<>'this' AND lower(words)<>'u' AND lower(words)<>'at' AND lower(words)<>'that' AND lower(words)<>'with' AND lower(words)<>'my' AND lower(words)<>'d' AND lower(words)<>'//' AND lower(words)<>'so' AND lower(words)<>'c' AND lower(words)<>'was' AND lower(words)<>'by' AND lower(words)<>'v' AND lower(words)<>'y' AND lower(words)<>'h' AND lower(words)<>'g' AND lower(words)<>'your' AND lower(words)<>'are' AND lower(words)<>'as' AND lower(words)<>'from' AND lower(words)<>'it' AND lower(words)<>'me' AND lower(words)<>'w' AND lower(words)<>'just' AND lower(words)<>'we' AND lower(words)<>'out' AND lower(words)<>'n' AND lower(words)<>'like' AND lower(words)<>'f' AND lower(words)<>'have' AND lower(words)<>'his' AND lower(words)<>'all' AND lower(words)<>'our' AND lower(words)<>'k' AND lower(words)<>'about' AND lower(words)<>'for' AND lower(words)<>'p' AND lower(words)<>'an' AND lower(words)<>'do' AND lower(words)<>'but' AND lower(words)<>'not' AND lower(words)<>'-' AND lower(words)<>'_' AND lower(words)<>'=' AND lower(words)<>'has' AND lower(words)<>'who' AND lower(words)<>'if' AND lower(words)<>'one' AND lower(words)<>'what' AND lower(words)<>'they' AND lower(words)<>'or' AND lower(words)<>'can' AND lower(words)<>'no' AND lower(words)<>'get' AND lower(words)<>':' AND lower(words)<>'most' AND lower(words)<>'when' AND lower(words)<>'how' AND lower(words)<>'e.' AND lower(words)<>'will' AND lower(words)<>'need' AND lower(words)<>'he' AND lower(words)<>'still' AND lower(words)<>'make' AND lower(words)<>'+' AND lower(words)<>'e:' AND lower(words)<>'more' AND lower(words)<>'follow' AND lower(words)<>'now' AND lower(words)<>'any' AND lower(words)<>'want' AND lower(words)<>'up' AND lower(words)<>'|' AND lower(words)<>'after' AND lower(words)<>'did' AND lower(words)<>'something' AND lower(words)<>'never' AND lower(words)<>'under' AND lower(words)<>'best' group by lower(words) order by total desc;

-- Save User query to file
INSERT OVERWRITE DIRECTORY '/home/alberto/output/users' row format delimited fields terminated by ',' select users, count(users) as total from users where users<>'"' AND users<>'' group by users order by total desc;


