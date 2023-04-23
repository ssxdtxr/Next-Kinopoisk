import React, { FC } from 'react';
import { http } from '@/http/http';
import { Actor } from '@/devPages/Actor/Actor';
import { IActorData } from '@/types/IActorData';
export async function getServerSideProps(context: any) {
  const { data: actorData } = await http.get(`/v1/staff/${context.query.id}`);
  return {
    props: { actorData },
  };
}

export interface IActor {
  actorData: IActorData
}


const ActorPage: FC<IActor> = ({actorData}) => {
  return (
    <div>
      <Actor actorData={actorData}/>
    </div>
  );
};

export default ActorPage;