'use client'

import React from 'react';
import { DatePickerInput, DatesRangeValue } from '@mantine/dates';
import { useTranslation } from 'react-i18next';
import '@mantine/dates/styles.css';
import '@mantine/core/styles.css';

interface DatePickerProps {
  startDate: Date | null;
  endDate: Date | null;
  onChange: (dates: [Date | null, Date | null]) => void;
}

const CustomDatePicker: React.FC<DatePickerProps> = ({
  startDate,
  endDate,
  onChange,
}) => {
  const { t } = useTranslation();

  const handleChange = (value: DatesRangeValue) => {
    onChange([value[0], value[1]]);
  };

  return (
    <div className="w-full">
      <DatePickerInput
        type="range"
        valueFormat="DD MMM YYYY"
        label={t('booking.select_dates')}
        placeholder={t('booking.select_dates_placeholder', 'Pick dates range')}
        value={[startDate, endDate]}
        onChange={handleChange}
        minDate={new Date()}
        clearable
        size="lg"
        radius="md"
        classNames={{
          input: 'bg-white text-black border-0',
          label: 'text-white text-lg font-semibold mb-2',
        }}
        styles={{
          input: {
            backgroundColor: 'white',
            color: 'black',
            border: 'none',
            '&:focus': {
              borderColor: 'black',
            },
          },
          day: {
            '&:hover': {
              backgroundColor: 'rgb(243 244 246)',
            },
            '&[data-selected]': {
              backgroundColor: 'black',
              color: 'white',
              '&:hover': {
                backgroundColor: 'black',
              },
            },
            '&[data-in-range]': {
              backgroundColor: 'rgb(243 244 246)',
            },
          },
        }}
      />
    </div>
  );
};

export default CustomDatePicker; 