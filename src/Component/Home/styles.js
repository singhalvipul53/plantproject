import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../utilities/Color';

let imagewidth = 150; //width of image
let imageheight = 150;
let windowwidth = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },
  flexrow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexbetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  plantimagebackground: {
    width: windowwidth - 30 - imagewidth / 2,
    height: 200,
    resizeMode: 'contain',
    position: 'relative',
    paddingHorizontal: 35,
    paddingVertical: 20,
  },
  absimagecont: {
    position: 'absolute',
    right: -75,
    top: -40,
  },
  plantimage: {
    width: imagewidth,
    height: imageheight,
  },
  mainbody: {
    padding: 15,
  },
  plantcondition: {
    fontSize: 14,
    color: Colors.maintextcolor,
    marginRight: 15,
  },
  plantname: {
    fontSize: 32,
    color: Colors.maintextcolor,
    marginTop: 10,
    marginBottom: 15,
  },
  plantprice: {
    fontSize: 18,
    color: Colors.maintextcolor,
    marginRight: 30,
  },
  hearticon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 15,
  },
  carticon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  detailheaderback: {
    width: windowwidth,
    minHeight: 300,
    height: 420,
    padding: 30,
    position: 'relative',
  },
  detailplantname: {
    fontSize: 38,
    color: Colors.maintextcolor,
  },
  detailhearticonview: {
    borderRadius: 10,
    backgroundColor: Colors.width,
    padding: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  detailhearticon: {
    width: 40,
    height: 40,
  },
  priceheading: {
    fontSize: 12,
    color: Colors.maintextcolor,
    marginBottom: 3,
  },
  detailpagepricetext: {
    color: Colors.maintextcolor,
    fontSize: 16,
  },
  detailplantabs: {
    position: 'absolute',
    right: 30,
    bottom: -50,
  },
  detailplantimage: {
    width: windowwidth / 2,
    height: 300,
  },
  detailpageheader: {
    fontSize: 14,
    color: Colors.maintextcolor,
    marginBottom: 10,
  },
  detailpagebio: {
    fontSize: 15,
    color: Colors.maintextcolor,
  },
});
