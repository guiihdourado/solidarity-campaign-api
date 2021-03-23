import { EntityRepository, Repository } from 'typeorm';
import BasicBasketPrice from '../models/BasicBasketPrice';

@EntityRepository(BasicBasketPrice)
class BasicBasketsPricesRepository extends Repository<BasicBasketPrice> {}

export default BasicBasketsPricesRepository;
