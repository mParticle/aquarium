import Cascader from 'src/components/data-entry/QueryItem/Cascader'
import TextInput from 'src/components/data-entry/QueryItem/TextInput'
import NumberInput from 'src/components/data-entry/QueryItem/NumberInput'

/**
 * @deprecated The QueryItem component group is deprecated and will not receive further updates.
 * Avoid using it in new implementations.
 */
const ValueSelector = () => {
  // eslint-disable-next-line react/no-unescaped-entities
  return <>DON'T USE THIS OR YOU WILL BE FIRED!</>
}

export default ValueSelector

ValueSelector.TextInput = TextInput
ValueSelector.NumberInput = NumberInput
ValueSelector.Cascader = Cascader
