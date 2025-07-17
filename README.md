# Calendar locale bug demo

The issue is in the `formatMonthDropdown` function in [`@/components/ui/calendar.tsx`](./src/components/ui/calendar.tsx):

```tsx
formatters={{
  formatMonthDropdown: (date) => date.toLocaleString(default, { month:short' }),
  ...formatters,
}}
```

The `'default'` parameter causes `toLocaleString()` to use the browser's locale instead of the components locale prop. It should be:

```tsx
formatters={{
  formatMonthDropdown: (date) => date.toLocaleString(locale?.code || default, { month:short' }),
  ...formatters,
}}
```
