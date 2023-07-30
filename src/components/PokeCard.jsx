import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import defaultImg from "../assests/pokemon.jpg";
import { Box, Paper } from "@mui/material";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PropTypes from "prop-types";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 0.7,
        m: 1,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "grey.100",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        borderRadius: 2,
        // fontSize: '0.8rem',
        // fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

const PokeCard = ({ myData }) => {
  const { id, name, height, weight, type } = myData;

  const handleImgError = (event) => {
    event.target.src = defaultImg;
  };

  return (
    <>
      <div>
        <Card
        className="pokecard"
          sx={{
            maxWidth: 290,
            justifyContent: "center",
            alignItems: "center",
            margin: "10px",
            backgroundColor: "#f6f6f6",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Box
          
            style={{
              display: "flex",
              alignItems: "flex-start",
              position: "relative",
            }}
          >
            <img
              // component="img"
              // height="100"
              // width="100"
              src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`}
              alt={`Pokemon_${name}`}
              onError={handleImgError}
              style={{
                objectFit: "cover",
                width: "auto",
                height: "160px",
                marginLeft: "auto",
                marginRight: "auto",
                padding: "7px 2px",
              }}
            />
            <CardActions
              disableSpacing
              sx={{ position: "absolute", top: "0", right: "0" }}
            >
              <IconButton aria-label="add to favorites">
                <FavoriteBorderOutlinedIcon
                  style={{
                    color: "#a19b9b",
                    fontSize: "32px",
                  }}
                />
              </IconButton>
            </CardActions>
          </Box>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <Box textTransform="capitalize" style={{ margin: "1px 5px" }}>
                <Paper
                  sx={{
                    backgroundColor: "black",
                    margin: "10px 3px",
                    padding: "3px 6px",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    style={{ fontSize: "14px", color: "#00ff7a" }}
                    variant="h5"
                    color="text.primary"
                  >
                    Name : {name}
                  </Typography>
                </Paper>
                <Paper
                  sx={{
                    backgroundColor: "black",
                    margin: "10px 3px",
                    padding: "3px 6px",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    style={{ fontSize: "14px", color: "#00ff7a" }}
                    variant="h6"
                    color="text.primary"
                  >
                    Height : {height}
                  </Typography>
                </Paper>
              </Box>
              <Box>
                <Paper
                  sx={{
                    backgroundColor: "black",
                    // backgroundColor: "#dcd9d9de",
                    margin: "10px 3px",
                    padding: "3px 6px",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    style={{ fontSize: "14px", color: "#00ff7a" }}
                    variant="h6"
                    color="text.primary"
                  >
                    Weight : {weight}
                  </Typography>
                </Paper>
                <Paper
                  sx={{
                    backgroundColor: "black",
                    margin: "10px 3px",
                    padding: "3px 6px",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    style={{
                      fontSize: "14px",
                      color: "#00ff7a",
                      textTransform: "capitalize",
                    }}
                    variant="h6"
                    color="text.primary"
                  >
                    Type : {type}
                  </Typography>
                </Paper>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default PokeCard;
