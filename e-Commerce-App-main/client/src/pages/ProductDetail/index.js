import {useParams} from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';
import {fetchProduct} from '../../api';
import {Text, Button, Box} from '@chakra-ui/react';
import moment from 'moment';
import ImageGallery from 'react-image-gallery';
import { useBasket } from '../../context/BasketContext';
import styles from './styles.module.css';

function ProdutDetail() {
    const { product_id } = useParams();
	const { addToBasket,items} = useBasket();
	const { isLoading, error, data } = useQuery(["product", product_id], () => 
    fetchProduct(product_id)
	);
	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}
	const findBasketItem = items.find((item) => item._id === product_id)
    const images = data.photos.map((url) =>({ original: url }))

  return (
    <div>
		

		<Text as='h2' fontSize='2xl'>
			{data.title}	
		</Text>	
		<Text>{moment(data.createdAt).format('DD/MM/YYYY')}</Text>
		
		<Box margin={"10"} >
				<ImageGallery additionalClass={styles.image} 
					items={images}
				/>
			</Box>
			<p>{data.description}</p>
			<Button colorScheme='pink' mt='2' onClick={() => addToBasket(data,findBasketItem)}>
			{
				findBasketItem ? 'Remove from basket' : 'Add to basket'
			}
			</Button>
	</div>
  )
}

export default ProdutDetail