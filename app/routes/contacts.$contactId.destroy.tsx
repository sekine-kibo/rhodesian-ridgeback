import { ActionFunctionArgs } from '@remix-run/node'
import { redirect } from 'react-router'
import invariant from 'tiny-invariant'
import { deleteContact } from '~/data'

export const action = async ({ params }: ActionFunctionArgs) => {
  invariant(params.contactId, 'Missing contactId param')
  await deleteContact(params.contactId)
  return redirect('/') // return が必要
}
