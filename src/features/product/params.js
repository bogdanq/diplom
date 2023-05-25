import {
  Paper,
  TableRow,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Table,
} from "@mui/material";

export const ParamsTable = ({ height, width, material, color }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Ширина</TableCell>
            <TableCell>Высота</TableCell>
            <TableCell>Материал</TableCell>
            <TableCell>Цвет</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              {width}(м)
            </TableCell>

            <TableCell>{height}(cм)</TableCell>

            <TableCell>{material}</TableCell>

            <TableCell>{color}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
