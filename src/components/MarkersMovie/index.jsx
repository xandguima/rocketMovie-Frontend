import {FiPlus, FiX} from 'react-icons/fi'

import {ContainerMarkersMovie} from './style'

export function MarkersMovie({isNew, value, onClick,...rest}){
  return(
    <ContainerMarkersMovie isNew={isNew}>
      <input
      type="text"
      value={value}
      readOnly={!isNew}
      {...rest}
      />

      <button
        type="button"
        onClick={onClick}
        className={isNew ? 'button-add':'button-delete'}
      >
        {isNew?<FiPlus/> : <FiX/>}

      </button>

    </ContainerMarkersMovie>
  )

}