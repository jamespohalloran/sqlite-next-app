// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../lib/db';

type Data = {
  title: string
  requestTime: string
  todos: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const todos = await new Promise<any>((resolve, reject) => { 
    db.all("SELECT * FROM demo", function(err:any, res:any){
    if(res) {
      resolve(res);
    }
    if(err) {
      reject(err)
    }
  }) })
  res.status(200).json({ title: 'My content API', requestTime: new Date().toString(), todos })
}
