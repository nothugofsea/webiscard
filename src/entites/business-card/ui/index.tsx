import { HTMLAttributes } from 'react'
import { cn } from '~/shared/lib/shadcn'
import { Description } from './description'
import { Name } from './name'
import { Photo, PhotoContainer } from './photo'
import { SocialNetwork } from './social-network'

export const BusinessCard = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center w-[340px] px-8 lg:w-[512px] lg:px-24 pb-6 bg-background rounded-md',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

BusinessCard.PhotoContainer = PhotoContainer
BusinessCard.Photo = Photo
BusinessCard.Name = Name
BusinessCard.Description = Description
BusinessCard.SocialNetwork = SocialNetwork