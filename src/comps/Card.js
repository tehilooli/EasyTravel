import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  outline: {
    outline: 'none!important',
  },
  like: {
    color: 'none',
  },
  liked: {
    color: 'red',
  }
}));

export default function RecipeReviewCard(props) {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [liked, setLiked] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLikeClick = () => {
    setLiked(!liked);
  }

  return (
    <Card
      className={classes.root}
      key={props.uniqueId}>
      <CardHeader
        titleTypographyProps={{variant:'subtitle1'}}
        subheaderTypographyProps={{variant:'subtitle2'}}
        title={props.title}
        subheader={props.subheader}
      />
      <CardMedia
        className={classes.media}
        image={props.image}
        title={props.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.firstInfo}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton 
          aria-label="add to favorites" 
          className={clsx(classes.outline, classes.like, {[classes.liked]: liked})}
          onClick={handleLikeClick}
          >         
            <FavoriteIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.outline, classes.expand, {[classes.expandOpen]: expanded,})}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{props.moreInfo}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}