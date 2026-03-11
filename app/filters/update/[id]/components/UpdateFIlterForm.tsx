"use client";

import FilterForm from "@/app/filters/components/FilterForm";
import { FilterType } from "@/types/filter";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { updateWeightFilter } from "../services";

interface UpdateFilterFormProps {
  filterData: FilterType;
}

export default function UpdateFIlterForm({
  filterData,
}: UpdateFilterFormProps) {
  console.log(filterData);

  const [filterInput, setFilterInput] = useState<number>(
    filterData.weight_amount || 1,
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(filterData.id);
      const res = await updateWeightFilter(filterInput, filterData.id);

      if (res.status === 200) {
        toast.success("Filter updated!");
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const errorMessage = error.response.data.message;
      if (errorMessage) {
        toast.error(errorMessage);
      }
    }
  };

  return (
    <div>
      <FilterForm
        filterInput={filterInput}
        handleSubmit={handleSubmit}
        mode="update"
        setFilterInput={setFilterInput}
      />
    </div>
  );
}
