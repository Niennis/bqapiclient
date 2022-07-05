import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { visuallyHidden } from '@mui/utils';
import AlertDialog from './Alert';
import Form from './Form'

import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { theme, ColorButton } from '../utils/theme';

const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

const getComparator = (order, orderBy) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const EnhancedTableHead = (props) => {
  const { order, orderBy, onRequestSort, headCells } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            sx={{ visibility: 'hidden' }}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell  sx={{ color:'white'}}
            key={headCell.id}
            align={headCell.numeric ? 'center' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTable = ({ rows, typeForm, headCells, functions }) => {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState(Object.keys(headCells)[0]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [modal, setModal] = React.useState(false)
  const [isNew, setIsNew] = React.useState(false)

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleModal = () => {
    console.log(typeForm)
    setModal(!modal)
  }

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <ThemeProvider theme={theme}>

    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 , backgroundColor:'#40414c89'}}>
        <Toolbar>
          <Typography
            sx={{ flex: '1 1 100%', color:'white', fontWeight:'bold' }}
            variant="h6"
            id="tableTitle"
            component="div"
            align='left'
          >
            {typeForm}
          </Typography>
          <Tooltip title="Agregar usuario">
            <IconButton onClick={() => { handleModal(); setIsNew(true); }}>
              <AddCircleIcon  sx={{ color:'white'}}/>
            </IconButton>
          </Tooltip>
        </Toolbar>
        <TableContainer>
          <Table
            sx={{ minWidth: 700 }}
            aria-labelledby="tableTitle"
            size={'small'}
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              headCells={headCells}
            />
            <TableBody>

              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.id}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          sx={{ visibility: 'hidden' }}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell  sx={{ color:'white' , fontWeight:'bold'}}
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row[Object.values(headCells[0])[0]]}
                      </TableCell>
                      <TableCell align="center"  sx={{ color:'white', fontWeight:'bold'}}>
                        {Object.values(headCells[1])[0] === 'rol' ? (row.roles.admin && 'Admin') : row.price}
                      </TableCell>
                      <TableCell align="center">

                        {/* <AlertDialog
                          action={'Editar'}
                          handleGet={() => functions.getCurrentItem(typeForm === 'Usuarios' ? 'users' : 'products', row.id)}
                          handleUpdate={() => functions.handleEdit(typeForm === 'Usuarios' ? 'users' : 'products', row.id)} 
                        /> */}
                        <ColorButton
                          sx={{ m: 1, textTransform: 'capitalize', margin: 0 }}
                          onClick={() => { 
                            handleModal(); 
                            functions.getCurrentItem(typeForm === 'Usuarios' ? 'users' : 'products', row.id) ;
                            setIsNew(false);
                            }}>
                           Editar

                        </ColorButton>
                      </TableCell>
                      <TableCell align="center">
                        <AlertDialog
                          action={'Eliminar'}
                          handleGet={() => functions.getCurrentItem(typeForm === 'Usuarios' ? 'users' : 'products', row.id)}
                          handleUpdate={() => functions.handleDelete(typeForm === 'Usuarios' ? 'users' : 'products', row.id)}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (33) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination  sx={{ color:'white', fontWeight:'bold'}}
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      {
        modal
          ? <Form
            typeForm={typeForm}
            showModal={handleModal}
            handleNewItem={isNew ? functions.handleNewItem : functions.handleEdit}
          />
          : <></>

      }
    </Box>
    </ThemeProvider>
  );
}

export default EnhancedTable;