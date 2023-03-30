import {
  Paper,
  TableRow,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Table,
} from "@mui/material";

const rows = [
  {
    width: "10м",
    height: "5м",
    material: "Дерево",
    weight: "25кг",
  },
];

export const ParamsTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Ширина</TableCell>
            <TableCell>Высота</TableCell>
            <TableCell>Материал</TableCell>
            <TableCell>Вес</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.width}
              </TableCell>

              <TableCell>{row.height}</TableCell>

              <TableCell>{row.material}</TableCell>

              <TableCell>{row.weight}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
