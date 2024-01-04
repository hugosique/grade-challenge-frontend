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
            bimesterData: {},
            isFetching: true,
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

          this.setState({ bimesterData: organizedData, isFetching: false });
        } catch (error) {
          console.error('Erro ao buscar notas:', error);
        }
    };

    render() {
        const { bimesterData, isFetching } = this.state;
        const allBimesters = ['PRIMEIRO', 'SEGUNDO', 'TERCEIRO', 'QUARTO'];


        return (
            <div className='bimesterGrid'>
                {isFetching ? (   
                    <p>Carregando...</p>
                ) : (
                    // Renderizar os componentes Bimester após a conclusão do fetchGrades
                    allBimesters.map((bimestre, index) => (
                        <Bimester
                            key={bimestre}
                            number={getBimesterNumber(bimestre)} 
                            data={bimesterData[bimestre]}
                            fetchGrades={this.fetchGrades}
                        />
                    ))
                )}
            </div>
        );
    }
}
