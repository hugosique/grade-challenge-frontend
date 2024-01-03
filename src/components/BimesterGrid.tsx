import { Component } from 'react';
import '../styles/BimesterGrid.scss';
import Bimester from './Bimester';
import { IBimesterGridProps, IBimesterGridState } from '../interfaces/bimesterGrid.model';
import { ApiService } from '../services/api.service';
import { getBimesterNumber } from '../helpers/getBimesterNumber';

export default class BimesterGrid extends Component<IBimesterGridProps, IBimesterGridState> {
    constructor(props: IBimesterGridProps) {
        super(props);

        this.state = {
            bimesterData: {}
        }
    }

    componentDidMount() {
        this.fetchGrades();
    }
    
    fetchGrades = async () => {
        try {
          const response = await ApiService.listAll();
          const data = response.data.result;

          const organizedData: { [key: string]: any[] } = {};

          data.forEach((item: any) => {
            const { bimestre } = item;
            if (!organizedData[bimestre]) {
              organizedData[bimestre] = [];
            }
            organizedData[bimestre].push(item);
          });

          this.setState({ bimesterData: organizedData });
        } catch (error) {
          console.error('Erro ao buscar notas:', error);
        }
    };

    render() {
        const { bimesterData } = this.state;

        return (
            <div className='bimesterGrid'>
                {Object.keys(bimesterData).map((bimestre, index) => (
                    <Bimester
                        key={bimestre}
                        number={getBimesterNumber(bimestre)} 
                        data={bimesterData[bimestre]}
                        fetchGrades={this.fetchGrades}
                    />
                ))}
            </div>
        );
    }
}
