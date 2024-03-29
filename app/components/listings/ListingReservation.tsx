"use client";

import { Range } from "react-date-range";
import Calender from "../Inputs/Calender";
import Button from "../Button";
interface ListingReservationProps {
  price: number;
  totalPrice: number;
  dateRange: Range;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

function ListingReservation({
  price,
  totalPrice,
  dateRange,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates,
}: ListingReservationProps) {
  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold ">${price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />

      <Calender
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
      />
      <div className="p-4 ">
        <Button disabled={disabled} label="Reserve" onClick={onSubmit} />
      </div>

      <hr />
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        Total
      </div>
      <div>${totalPrice}</div>
    </div>
  );
}

export default ListingReservation;
