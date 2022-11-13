import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Image,
} from 'react-native';


const IMAGES = {
    image1: require('./images/princess.jpg'),
    image2: require('./images/sweet.jpg'),
    image3: require('./images/meta.jpg'),
    image4: require('./images/idiots.jpg'),
    image5: require('./images/everyday.jpg'),
    image6: require('./images/rating.png'),
    image7: require('./images/five.png'),
  };
  
export default class MovieListScreen extends Component{

  state = {
    moviesList: [
      {key: 1, name: 'The Princess Switch', poster: IMAGES.image1, genre: 'Romance/Comedy', year: '2018', about: 'One week before Christmas, a duchess switches places with an ordinary woman from Chicago, who looks exactly like her, and they each fall in love with each others beaus.', rating: '9/10', stars: IMAGES.image6,comments: 'It was fun to watch.'},
      {key: 2, name: 'Sweet & Sour', poster: IMAGES.image2, genre: 'Romance/Comedy', year: '2021', about: 'Faced with real-world opportunities and challenges, a couple endures the highs and lows of trying to make a long-distance relationship survive.', rating: '10/10',stars: IMAGES.image7, comments: 'It was funny.'},
      {key: 3, name: 'Metamorphosis', poster: IMAGES.image3, genre: 'Horror', year: '2019', about: 'A face-changing evil spirit infiltrates a family, placing one brother in danger while the other tries to save him.', rating: '9/10', stars: IMAGES.image6, comments: 'It was scary.'},
      {key: 4, name: '3 idiots', poster: IMAGES.image4, genre: 'Comedy/Drama', year: '2009', about: 'In college, Farhan and Raju form a great bond with Rancho due to his positive and refreshing outlook to life. Years later, a bet gives them a chance to look for their long-lost friend whose existence seems rather elusive.', rating: '10/10', stars: IMAGES.image7, comments: 'It has a lot of life lessons.'},
      {key: 5, name: 'Everyday', poster: IMAGES.image5, genre: 'Drama', year: '2012', about: 'Sixteen-year-old Rhiannon falls in love with A, a mysterious spirit who inhabits a different body every day. Feeling an unmatched connection, Rhiannon and A try to find each other on a daily basis, always unsure of what or who the next day will bring. Soon, the realities of loving someone who is a different person every 24 hours starts to take its toll, leaving Rhiannon and A to face the hardest decision either has ever had to make.', rating: '10/10',stars: IMAGES.image7, comments: 'It has a lot of life lessons.'}
    ]
  }

  render(){
    return (
      <View style={styles.container}>
        <ScrollView>
            <View style={styles.box}> 
                <Image style={styles.heart} source = {require('./images/heart.png')} ></Image>
                <Text style={styles.Title}>Favorites</Text>
            </View>
          { 
            this.state.moviesList.map((movie) => {
              return(
                <View style={styles.list} key={movie.key}>
                    <TouchableOpacity style={styles.button}  onPress={()=>{this.props.navigation.navigate('MovieDetailScreen', {movie})}}>
                        <View style={styles.box}> 
                            <Image style={styles.poster} source = {movie.poster} ></Image>
                            <Text style={styles.sectionTitle}>{movie.name}</Text>
                        </View>
                        <View style={styles.box2}> 
                            <Text style={styles.sectionDescription}>{movie.year}</Text>
                        </View>
                        <View style={styles.box3}> 
                            <Text style={styles.Genre}>{movie.genre}</Text>
                        </View>
                        <View style={styles.box4}> 
                        <Image style={styles.stars} source = {movie.stars} ></Image>
                        </View>
                        <View style={styles.box5}> 
                            <Text style={styles.rating}>{movie.rating}</Text>
                        </View>
                    </TouchableOpacity>
                  </View>

            )})
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3c457c',
  },
  list: {
    flex: 1,
    margin: 10,
    backgroundColor: '#1d2238',
    borderRadius: 15,
  },
  box: {
    flexDirection: 'row',
  },
  box2: {
    flexDirection: 'row',
  },
  box3: {
    flexDirection: 'row',
  },
  box4: {
    flexDirection: 'row',
  },
  box5: {
    flexDirection: 'row',
  },
  Title: {
    fontSize: 35,
    marginTop: 20,
    fontWeight: '600',
    color: 'white',
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: 'white',
    marginTop: 40,
    alignContent: 'center',
  },
  button: {
  },
  poster: {
    margin: 20,
    width: 150,
    height: 250,
    resizeMode: 'contain',
  },
  sectionDescription: {
    fontSize: 15,
    color: 'white',
    fontWeight: '400',
    marginLeft: 190,
    marginTop: -220,
    alignContent: 'center',
  },
  Genre: {
    fontSize: 15,
    color: 'white',
    fontWeight: '400',
    marginLeft: 190,
    marginTop: -195,
    fontStyle: 'italic',
    alignContent: 'center',
  },
  rating: {
    fontSize: 15,
    color: 'white',
    fontWeight: '400',
    marginLeft: 190,
    marginTop: -60,
    alignContent: 'center',
  },
  stars: {
    fontSize: 15,
    color: 'white',
    fontWeight: '400',
    marginLeft: 190,
    marginTop: -100,
    alignContent: 'center',
  },
  heart: {
    height: 50,
    width: 50,
    margin: 20,
  }
});