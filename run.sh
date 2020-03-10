a_flag="";
r_flag="";
print_usage() {
  printf "Usage: ...";
}

while getopts 'ar' flag; do
  case "${flag}" in
    a) a_flag="true" ;;
    r) r_flag="true" ;;
    *) print_usage
       exit 1 ;;
  esac
done


if [ "$a_flag" = "true" ];
then
  echo "a_flag is $a_flag"
  docker network create -d bridge mynet;
fi

export IMAGE_TAG=$(cat VERSION);
export AARCH=`uname -m`;
export NAME=sdat_frontend

if [ "$r_flag" = "true" ];
then
    docker build -t cachengo/$NAME-$AARCH:$IMAGE_TAG --build-arg REACT_APP=${REACT_APP} .
fi

docker stop $NAME;
docker rm $NAME;

docker run -d \
  --net=mynet \
  --name=$NAME \
  cachengo/$NAME-$AARCH:$IMAGE_TAG;