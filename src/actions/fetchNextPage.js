
import {HAS_NEXT_PAGE} from '../constants/action constants'

export const fetchNextPage = ( hasNextPage ) => {
    return {
       type : HAS_NEXT_PAGE,
       payload : hasNextPage
    }
}


