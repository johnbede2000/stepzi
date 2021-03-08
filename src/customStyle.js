import { useTheme } from '@material-ui/core/styles';

const CustomStyle = () => {
  const theme = useTheme();
  const custom = {
    cursive: {
      fontFamily: 'Caveat, cursive',
      fontSize: '2em',
      color: theme.palette.primary.main,
    },
  };
  return custom;
};

export default CustomStyle;
