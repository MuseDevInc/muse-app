// return (
//   <Paper
//     elevation={8}
//     sx={{ minHeight: "92vh", maxHeight: "100vh", background: `${backGrad}` }}
//   >
//     <Stack alignItems={"center"}>
//       <Card sx={{ maxWidth: 345 }}>
//         <CardHeader
//           avatar={
//             <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//               R
//             </Avatar>
//           }
//           action={
//             <IconButton aria-label="settings">
//               <MoreVertIcon />
//             </IconButton>
//           }
//           title="Charmille"
//           subheader="New York City, NY"
//         />
//         <CardMedia
//           component="img"
//           height="194"
//           image="https://i.cbc.ca/1.6163000.1630614872!/fileImage/httpImage/drake-certified-lover-boy-album-art.jpeg"
//           alt="CLB"
//         />
//         <CardContent>
//           <Typography variant="body2" color="text.secondary">
//             This impressive paella is a perfect party dish and a fun meal to
//             cook together with your guests. Add 1 cup of frozen peas along
//             with the mussels, if you like.
//           </Typography>
//         </CardContent>
//         <CardActions disableSpacing>
//           <ExpandMore
//             expand={expanded}a
//             onClick={handleExpandClick}
//             aria-expanded={expanded}
//             aria-label="show more"
//           >
//             <ExpandMoreIcon />
//           </ExpandMore>
//         </CardActions>
//         <Collapse in={expanded} timeout="auto" unmountOnExit>
//           <CardContent>
//             <TextField fullWidth
//               id="outlined-basic"
//               label="About Me"
//               variant="outlined"
//               margin="dense"
//               size="small"
             
//             />
//             <TextField fullWidth
//               id="outlined-basic"
//               label="Favorite Genres"
//               variant="outlined"
//               margin="dense"
//               size="small"
//             />{" "}
//             <TextField fullWidth
//               id="outlined-basic"
//               label="Favorite Album of All Time"
//               variant="outlined"
//               margin="dense"
//               size="small"
//             />{" "}
//             <TextField fullWidth
//               id="outlined-basic"
//               label="Favorite Song"
//               variant="outlined"
//               margin="dense"
//               size="small"
//             />
//           </CardContent>
//         </Collapse>
//       </Card>
//       <div className="" style={{padding: "1rem"}}>
//       <CreateSubmitButton handleCreateSubmit={handleCreateSubmit} />
//       </div>
//     </Stack>
//     </Paper>
//   );