import React, {Component} from 'react';
import {
    ScrollView,
    Image,
    StyleSheet,
    Text,
    View,
    Button,
  } from 'react-native';


  export default class MovieDetailScreen extends Component {
    state = {
        movieName: this.props.route.params.movie.name,
        movieImage: this.props.route.params.movie.poster,
        movieAbout: this.props.route.params.movie.about,
        movieGenre: this.props.route.params.movie.genre,
        movieYear: this.props.route.params.movie.year,
        movieComment: this.props.route.params.movie.comments,
        movieStars: this.props.route.params.movie.stars,
        movieRating: this.props.route.params.movie.rating,
    }

    render (){
      return (
        <View style={styles.container}>
            <ScrollView>
              <View colors={['#C6FFDD', '#FBD786', '#f7797d']} style={styles.header}>
                  <Image style={styles.poster} source = {this.state.movieImage}></Image>
              <View style={styles.box}>
                <Text style={styles.MovieTitle}>{this.state.movieName}</Text>
                <View style={styles.box2}> 
                <Image style={styles.stars} source = {this.state.movieStars}></Image>
                <Text style={styles.sectionDescription}>{this.state.movieRating}</Text>
                </View>
                <View style={styles.box2}> 
                  <Text style={styles.sectionDescription}>{this.state.movieYear}</Text>
                  <Text style={styles.sectionDescription}>{this.state.movieGenre}</Text>
                </View>
                <Text style={styles.sectionTitle}>About</Text>
                <Text style={styles.about}>{this.state.movieAbout}</Text>
                <View>
                  <Text style={styles.sectionTitle}>Comments:</Text>
                  <View style={styles.comments}>
                    <View style={styles.box3}>
                      <Image style={styles.icon}  source = {require('./images/user.png')}></Image>
                      <Text style={styles.username}>Althea Baculi</Text>
                    </View>
                    <Text style={styles.sectionComment}>{this.state.movieComment}</Text>
                  </View>
                </View>
              </View>
              </View>
            </ScrollView>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    comments: {
      flex: 1,
      margin: 10,
      backgroundColor: '#1d2238',
      borderRadius: 15,
    },
    box3:{
      flexDirection: 'row',
    },
    header:{
      width: '100%',
      height: '55%',
    },
    poster: {
        width: 400,
        height: 400,
        backgroundColor: '#3c457c',
        marginBottom: 0,
        alignItems: 'center',
        resizeMode: 'contain',
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.4,
        shadowRadius: 2,
    },
    box:{
      backgroundColor: '#3c457c',
      flex: 1,
    },
    box2: {
      flexDirection: 'row',
    },
    image:{
      margin: 5,
      alignSelf: 'center',
    },
    MovieTitle:{
      marginTop: 15,
      marginLeft: 20,
      alignSelf: 'flex-start',
      fontSize: 30,
      fontWeight: '800',
      color: 'white',
    },
    sectionTitle: {
      marginTop: 15,
      marginLeft: 20,
      alignSelf: 'flex-start',
      fontSize: 25,
      fontWeight: '600',
      color: 'white',
    },
    sectionDescription: {
      marginLeft: 20,
      alignSelf: 'center',
      textAlign: 'justify',
      fontSize: 15,
      color: '#a0a3ba',
    },
    about:{
      padding: 20,
      alignSelf: 'center',
      textAlign: 'justify',
      fontSize: 15,
      color: '#a0a3ba',
    },
    username: {
      marginTop: 20,
      textAlign: 'justify',
      fontWeight: '500',
      fontSize: 13,
      color: '#a0a3ba',
    },
    icon:{
      marginTop: 15,
      marginLeft: 15,
      marginRight: 15,
    },
    sectionComment:{
      margin: 15,
      textAlign: 'justify',
      fontSize: 15,
      color: '#a0a3ba',
    },
    stars: {
      marginLeft: 20,
    }
  });