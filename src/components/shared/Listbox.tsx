import Select, { components, DropdownIndicatorProps, StylesConfig } from 'react-select';
import ChevronDownIcon from './icons/ChevronDownIcon';

interface OptionType {
  label: string
  value: string
}

interface CustomListbox {
  title: string
  placeholder: string
  required: boolean
  value: string
  onChange: (selectedOption: string) => void
  options: OptionType[]
  removeSort?: boolean
}

export default function Listbox({ title, placeholder, options, value, onChange, required, removeSort }: CustomListbox) {
  const DropdownIndicator = (props: DropdownIndicatorProps<OptionType, false>) => {
    return (
      <components.DropdownIndicator {...props}>
        <ChevronDownIcon />
      </components.DropdownIndicator>
    )
  }

  const listboxStyle: StylesConfig<OptionType, false> = {
    menuPortal: base => ({ ...base, zIndex: 9999 }),
    control: (provided, state) => ({
      ...provided,
      height: '45px',
      borderRadius: '8px',
      boxShadow: state.isFocused ? '0 0 0 3px rgba(66, 153, 225, 0.5)' : 'none',
      borderColor: state.isFocused ? 'rgba(66, 153, 225, 0.5)' : '#d1d5db',
      '&:hover': {
        borderColor: state.isFocused ? 'rgba(66, 153, 225, 0.5)' : '#d1d5db'
      }
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#4B5563',
      fontSize: '16px',
      fontWeight: 500
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#93C5FD' : state.isSelected ? '#60A5FA' : 'transparent',
      color: state.isFocused || state.isSelected ? 'white' : '#4B5563',
      padding: '12px 16px',
      fontSize: '16px',
      fontWeight: 500,
      cursor: 'pointer'
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: '8px',
      marginTop: '4px'
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#4B5563',
      fontSize: '16px',
      fontWeight: 500
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: '#6B7280'
    }),
    indicatorSeparator: () => ({
      display: 'none'
    })
  };


  const sortedOptions = [...options].sort((a, b) => a.label.localeCompare(b.label))
  const selectedOption = value ? options.find(opt => opt.value === value) : null

  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={title}>
        {title}

        <Select
          options={removeSort ? options : sortedOptions}
          value={selectedOption}
          placeholder={selectedOption ? undefined : placeholder}
          components={{ DropdownIndicator }}
          styles={listboxStyle}
          onChange={(selectedOption) => onChange(String(selectedOption?.value))}
        />
      </label>
    </div>
  )
}