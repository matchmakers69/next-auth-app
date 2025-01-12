import Skeleton from "@mui/material/Skeleton";
const PostShowLoading = () => {
  return (
    <div className="m-4">
      <div className="my-2">
        <Skeleton width={48} height={8} />
      </div>
      <div className="space-y-2 rounded border p-4">
        <Skeleton width={32} height={6} />
        <Skeleton width={32} height={6} />
        <Skeleton width={32} height={6} />
      </div>
    </div>
  );
};

export default PostShowLoading;
