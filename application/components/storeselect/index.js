import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList, Animated, Easing } from 'react-native';

import Button from 'react-native-button'

import { connect }              from 'react-redux';
import { bindActionCreators }   from 'redux';

import StoreListItem from './storelistitem';

import AppActions from '../../actions';

const staticImagesBullShit = [
	//TODO: images should come from uri
	//TODO: cache remote images
	require('../../statics/images/shops/0.jpg'),
	require('../../statics/images/shops/1.jpg'),
]

class StoreSelect extends Component {
	actionCb = shopId => this.props.actions.selectShop(shopId);

	render = () => {
		const { navigate } = this.props.navigation;
		return (
			<View
				style={styles.container}>
					<ScrollView
						scrollEnabled={false}
						centerContent={true}
					>
						{
							this.props.shops.ids.map((shopId, key) => {
								const shop = this.props.shops.byId[shopId];
								if (shop) {
									//TODO: fetch or get from cache imges here
									const shopImg = staticImagesBullShit[shopId];

									return (
										<StoreListItem
											key={key}
											actionCb={this.actionCb.bind(this, shopId)}
											shop={shop}
											shopId={shopId}
											shopImg={shopImg}
											navigate={navigate}
										/>
									);
								} else {
									return null;
								}
							})
						}
					</ScrollView>
                    <View
                        style={{
                            flexDirection: 'row'
                        }}
                    >
                        <Button
                            style={styles.buttonStyleDisabled}
                            dissabled={true}
                        >
                            <View
                                style={{
                                    padding:40,
                                    paddingLeft: 60,
                                    paddingRight: 60,
                                }}
                            >
                                <Text style={{
                                        fontSize: 20,
                                        textAlign: 'center',
                                        color:"#676565"
                                    }}>TopUp</Text>
                            </View>
                        </Button>
                        <Button
                            style={styles.buttonStyleDisabled}
                            dissabled={true}
                        >
                            <View
                                style={{
                                    padding:40,
                                    paddingLeft: 60,
                                    paddingRight: 60,
                                }}
                            >
                                <Text style={{
                                        fontSize: 20,
                                        textAlign: 'center',
                                        color:"#676565"
                                    }}>QR scan</Text>
                            </View>
                        </Button>
                    </View>
			</View>
		);
	}
};

const mapState = ({shops}) => ({shops});

const mapDispatch = dispatch => ({
	actions: bindActionCreators(AppActions, dispatch)
});

export default
		connect(mapState, mapDispatch)(StoreSelect)

const styles = {
	container: {
		alignItems: 		'center',
		backgroundColor: 	'#1f232b',
		flex: 				1,
		justifyContent: 	'center',
	},

	cardStyle: {
		backgroundColor: 	'#41495a',
		height: 			200,
		width: 				'100%'
    },
    buttonDisabledStyle: {
        backgroundColor: '#313744',
        borderWidth: 0,
    },
    buttonDisabledTextStyle: {
        color: '#BCBCBC',
    },
};
