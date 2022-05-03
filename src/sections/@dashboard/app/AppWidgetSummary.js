// @mui
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Card, Grid, Icon, Typography, Box } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
// components
import Iconify from '../../../components/Iconify';
import ison from '../../../assets/icons/Moscow.svg';

// ----------------------------------------------------------------------

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));

// ----------------------------------------------------------------------

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  totalInProgress: PropTypes.number.isRequired,
  totalPlan: PropTypes.number.isRequired,
  sx: PropTypes.object,
};

export default function AppWidgetSummary({ title, totalInProgress, totalPlan, icon, color = 'primary', sx, ...other }) {
  return (
    <Card
      sx={{
        py: 5,
        px: 2,
        paddingRight: '30px',
        boxShadow: 0,
        textAlign: 'center',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        color: (theme) => theme.palette.text.primary,
        bgcolor: (theme) => theme.palette.background.paper,
        boxShadow: 'rgb(90 114 123 / 11%) 0px 7px 30px 0px',
        ...sx,
      }}
      {...other}
    >

     <Grid md={9} textAlign="left">
      <Typography variant="subtitle1" sx={{ opacity: 0.72, marginBottom: '30px' }}>
        {title}
      </Typography>
      <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'baseline'}}><Box sx={{width: '12px', height: '12px', backgroundColor: '#54D62C', borderRadius: '50%', marginRight: '5px'}} /><Typography variant="body2">{totalInProgress} в процессе</Typography></Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline'}}><Box sx={{width: '12px', height: '12px', backgroundColor: '#1890FF', borderRadius: '50%', marginRight: '5px'}} /><Typography variant="body2"> {totalPlan} запланировано</Typography></Box>

      </Grid>
      <Grid md={3}
      >
      <IconWrapperStyle
        sx={{
          color: (theme) => theme.palette[color].dark,
          backgroundImage: (theme) =>
            `linear-gradient(135deg, ${alpha(theme.palette[color].dark, 0)} 0%, ${alpha(
              theme.palette[color].dark,
              0.24
            )} 100%)`,
        }}
      >
        <Icon sx={{width: '4.5rem', height: '4.5rem'}}>
          <img src={icon}/>
        </Icon>
        {/* <Iconify icon={icon} width={24} height={24} /> */}
      </IconWrapperStyle>
      </Grid>
    </Card>
  );
}
