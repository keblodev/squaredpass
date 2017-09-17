
import React, { Component } from 'react';
import { Text, View, Image, Animated, Easing } from 'react-native';

import Button from 'react-native-button'

import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';

export default class StoreListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: 	false,
			bg: 		new Animated.Value(0),
			top:		new Animated.Value((Math.random() > 0.5 ? -1 : 1) * Math.random() * 100),
            fadeOut: 	new Animated.Value(0)
        }
    }

	componentDidMount() {
		this.animate()
	}

	animate() {
		Animated.sequence([
			Animated.delay(Math.random()*700),
			Animated.parallel([
				Animated.timing(
					this.state.fadeOut,
					{
						toValue: 	1,
						duration: 	700,
					}
				),
				Animated.timing(
					this.state.top,
					{
						toValue: 	0,
						duration: 	700,
						easing: 	Easing.out(Easing.cubic)
					}
				),
			])
		]).start( () => {
			//TODO: set some state here?
			//this.setState({loading: false})
		});
	}

	render = () => {
		const {shop, shopId, shopImg, navigate, actionCb} = this.props;
		let loadingStyles = [styles.loadingScreen, {
			position: 'relative',
			top: this.state.top,
            opacity: this.state.fadeOut
        }];
		return (
			<Animated.View key="Fuego" style={loadingStyles}>
				<Button
					onPress={() => {
							actionCb && actionCb();
							navigate('Home', {
									title: 	shop.name,
									shopId: shopId
								})
						}
					}
				>
					<Card
						styles={{
							card: {
								overflow: 'hidden'
							}
						}}
					>
						<Image
							style={{
								height: 	'100%',
								flex: 		1,
								position: 	'absolute',
								width: 		'100%',
							}}
							source={shopImg}
						/>
						<View
							style={styles.card}
						>
							<CardTitle>
								<View
									style={styles.titleView}
								>
									<Text style={styles.title}>{shop.name}</Text>
								</View>
							</CardTitle>
                            {
                                shop.desc ? <CardContent>
                                <View
                                    style={styles.cardViewContent}
                                >
                                        <Text
                                            style={styles.text}
                                        >{shop.desc}</Text>
                                    </View>
                                </CardContent> : null
                            }

						</View>
					</Card>
				</Button>
			</Animated.View>
		)
	}
};

const styles = {
	card: {
		backgroundColor: 'transparent',
	},
	cardViewContent: {
		backgroundColor: 	'rgba(0,0,0, .6)',
		borderRadius:		2,
		padding:			10,
	},
	text: {
		color: 		'white',
		textAlign: 	'center',
	},
	titleView: {
		backgroundColor: 	'rgba(0,0,0, .6)',
        borderRadius:		2,
        marginTop:         40,
        marginBottom:      40,
        paddingTop:        10,
        paddingBottom:     10,
		width:				'100%'
	},
	title: {
		color:		 		'white',
		fontSize:		 	40,
		textAlign:		 	'center',
	}
};