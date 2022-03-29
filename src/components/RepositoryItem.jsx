
import { Text, View } from 'react-native';

const Item =({item})=> (
  <View>
    <Text>Full name : {item.fullName}</Text>
    <Text>Description:{item.description}</Text>
    <Text>Language:{item.language}</Text>
    <Text>Forks:{item.forksCount}</Text>
    <Text>Stars:{item.stargazersCount}</Text>
    <Text>Rating:{item.ratingAverage}</Text>
    <Text>Reviews:{item.reviewCount}</Text>
  </View>
)

const RepositoryItem = ({item}) => {

  return <Item item={item}></Item>
}

export default RepositoryItem;