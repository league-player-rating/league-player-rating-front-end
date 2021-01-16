import {
  UseColumnOrderState,
  UseExpandedRowProps,
  UseGroupByRowProps,
  UsePaginationInstanceProps,
  UsePaginationOptions,
  UsePaginationState,
  UseRowSelectRowProps,
  UseSortByColumnOptions,
  UseSortByColumnProps,
  UseSortByHooks,
  UseSortByInstanceProps,
  UseSortByOptions,
  UseSortByState,
  UseTableCellProps
} from 'react-table'

declare module 'react-table' {
  export interface TableOptions<D extends object>
    extends UsePaginationOptions<D>,
      UseSortByOptions<D> {}

  export interface Hooks<D extends object = {}>
    extends UseSortByHooks<D> {}

  export interface TableInstance<D extends object = {}>
    extends UsePaginationInstanceProps<D>,
      UseSortByInstanceProps<D> {}

  export interface TableState<D extends object = {}>
    extends UseColumnOrderState<D>,
      UsePaginationState<D>,
      UseSortByState<D> {
    rowCount: number
  }

  export interface ColumnInterface<D extends object = {}>
    extends UseSortByColumnOptions<D> {
    align?: string
  }

  export interface ColumnInstance<D extends object = {}>
    extends UseSortByColumnProps<D> {}

  export interface Cell<D extends object = {}, V = any>
    extends UseTableCellProps<D, V> {}

  export interface Row<D extends object = {}>
    extends UseExpandedRowProps<D>,
      UseGroupByRowProps<D>,
      UseRowSelectRowProps<D> {}
}