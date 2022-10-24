import {
  DataGrid,
  getGridStringOperators,
  GridColDef,
  GridFilterModel,
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { DateTime } from "luxon";
import { Dispatch, FunctionComponent, SetStateAction, useCallback, useState } from "react";
import { useGetConversationsFromAndByTypeQuery } from "../../services/conversations";

const columns: GridColDef[] = [
  {
    field: "datetime",
    headerName: "Date",
    width: 250,
    sortable: false,
    filterable: false,
    valueGetter: (params: GridValueGetterParams) =>
      DateTime.fromISO(params.row.datetime).toLocaleString(),
  },
  {
    field: "to",
    headerName: "To",
    width: 130,
    sortable: false,
    filterable: false,
  },
  {
    field: "from",
    headerName: "From",
    width: 130,
    sortable: false,
    filterOperators: getGridStringOperators().filter(
        (operator) => operator.value === 'equals',
      ),
  },
  {
    field: "type",
    headerName: "Type",
    sortable: false,
    width: 160,
    filterable: false,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.type === "sms" ? "SMS" : "Phone Call"}`,
  },
];

const CustomToolbar: FunctionComponent<{setFilterButtonEl: Dispatch<SetStateAction<HTMLButtonElement | null>>;}> = ({ setFilterButtonEl }) => (
  <GridToolbarContainer>
    <GridToolbarFilterButton ref={setFilterButtonEl} />
  </GridToolbarContainer>
);

export const Conversations = () => {
  const [queryOptions, setQueryOptions] = useState({} as { filterModel: GridFilterModel });
  const [filterButtonEl, setFilterButtonEl] = useState<HTMLButtonElement | null>(null);

  const { data, isLoading } = useGetConversationsFromAndByTypeQuery({
    from: queryOptions?.filterModel?.items?.find(item => item.columnField === 'from')?.value,
    type: undefined,
  });

  const onFilterChange = useCallback((filterModel: GridFilterModel) => {
    setQueryOptions({ filterModel: { ...filterModel } });
  }, []);

  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid
        rows={data ?? []}
        columns={columns}
        filterMode="server"
        onFilterModelChange={onFilterChange}
        loading={isLoading}
        pageSize={10}
        rowsPerPageOptions={[10]}
        components={{
          Toolbar: CustomToolbar,
        }}
        componentsProps={{
          panel: {
            anchorEl: filterButtonEl,
          },
          toolbar: {
            setFilterButtonEl,
          },
        }}
      />
    </div>
  );
};
