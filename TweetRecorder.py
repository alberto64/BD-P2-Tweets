# Import the necessary methods from tweepy library
import time
import tweepy
from tweepy import OAuthHandler

token = "1066402152132853760-mvifU0YnE3Xrs9zHJEzwaO3s0voPkH"
token_secret = "Yl7bxHepPnshKEhjQOZnllaWh6ZY9auttyg0RDruLLWLu"
consumer_key = "t2sRAi9jE3TV2WLE01VbIeGoR"
consumer_secret = "AqJIvpGn6MuqpnidKQB0bWVctKz4Wh5pfrAhgfEVxbA9SuGSfD"


if __name__ == '__main__':

    timer = 0
    
    while timer < 72:

        auth = OAuthHandler(consumer_key, consumer_secret)
        auth.set_access_token(token, token_secret)
        api = tweepy.API(auth)

        hashtags = open("hashtags.csv", "a+")
        keywords = open("keywords.csv", "a+")
        users = open("users.csv", "a+")

        hashtagsWord = open("hashtagsWord.csv", "a+")
        keywordsWord = open("keywordsWord.csv", "a+")
        usersWord = open("usersWord.csv", "a+")

        print("Getting Data")

        search4 = tweepy.Cursor(api.search, q="ebola OR zika OR flu OR diarrhea OR headache OR measles", result_type="recent", lang="en")
        for item in search4.items(50):
            keywords.write("\"" + str(item.created_at) + "\",\"" + item.id_str + "\",\"" + item.text + "\",\"" + item.user.id_str + "\"\n")
            for word in item.text.split(" "):
                print("\"" + str(item.created_at) + "\",\"" + item.id_str + "\",\"" + word + "\",\"" + item.user.id_str + "\"\n")
                keywordsWord.write("\"" + str(item.created_at) + "\",\"" + item.id_str + "\",\"" + word + "\",\"" + item.user.id_str + "\"\n")

        search1 = tweepy.Cursor(api.search, q="#", result_type="popular", lang="en")
        for item in search1.items(50):
            hashtags.write("\"" + str(item.created_at) + "\",\"" + item.id_str + "\",\"" + item.text + "\",\"" + item.user.id_str + "\"\n")
            for word in item.text.split(" "):
                print("\"" + str(item.created_at) + "\",\"" + item.id_str + "\",\"" + word + "\",\"" + item.user.id_str + "\"\n")
                hashtagsWord.write("\"" + str(item.created_at) + "\",\"" + item.id_str + "\",\"" + word + "\",\"" + item.user.id_str + "\"\n")

        search3 = tweepy.Cursor(api.search, q="e", result_type="recent", lang="en")
        for item in search3.items(50):
            keywords.write("\"" + str(item.created_at) + "\",\"" + item.id_str + "\",\"" + item.text + "\",\"" + item.user.id_str + "\"\n")
            for word in item.text.split(" "):
                print("\"" + str(item.created_at) + "\",\"" + item.id_str + "\",\"" + word + "\",\"" + item.user.id_str + "\"\n")
                usersWord.write("\"" + str(item.created_at) + "\",\"" + item.id_str + "\",\"" + word + "\",\"" + item.user.id_str + "\"\n")

        print("----------------------------------------")

        hashtags.close()
        keywords.close()
        users.close()

        hashtagsWord.close()
        keywordsWord.close()
        usersWord.close()

        time.sleep(3600)
        timer = timer + 1

