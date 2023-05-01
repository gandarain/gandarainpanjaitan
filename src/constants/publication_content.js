import Publication1 from '../../public/publication/1.png'
import Publication2 from '../../public/publication/2.png'

const title = 'Publication'
const description = 'Journal & Paper'
const publication_item = [
  {
    id: 1,
    title: 'Detecting the position of the sealring and the edge on the sensor chip',
    subtitle: 'March 2019 - Journal of Physics Conference Series',
    image: Publication1,
    link: 'https://www.researchgate.net/publication/333165938_Detecting_the_position_of_the_sealring_and_the_edge_on_the_sensor_chip'
  },
  {
    id: 2,
    title: 'LignoIndo: image database of Indonesian commercial timber',
    subtitle: 'November 2019 - IOP Conference Series Earth and',
    image: Publication2,
    link: 'https://www.researchgate.net/publication/337031617_LignoIndo_image_database_of_Indonesian_commercial_timber'
  },
]

const publication_constant = {
	title, description, publication_item
}

export default publication_constant