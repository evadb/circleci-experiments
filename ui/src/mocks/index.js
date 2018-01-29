import { evaluationQuery } from '../components/Home'

const mocks = [
	{
		request: {
			query: evaluationQuery,
			variables: {}
		},
		result: {
		  data: {
		    evaluationsFor: {
		      yearBuilt: '1894'
		    }
		  }
		}
	}
]

export default mocks