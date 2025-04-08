export interface CardProps {  
  color?: 'primary' | 'secondary' | 'dark' | 'linght'
  hover?: string;
  children?: React.ReactNode;
  noBoarder?: boolean;
}

export default function Card(props: CardProps){
    return (
        <div className="flex justify-center items-center">
            <div className={`rounded-xl bg-${props.color || 'light'}-600`}>
                <div className={`rounded-xl ${props.noBoarder ? '' : 'mb-2'}`}>
                    <div className={`
                        rounded-xl bg-${props.color || 'linght'}-500 p-2 overflow-hidden shadow-lg
                        ${props.hover ? `hover:bg-${props.color ?? 'light'}-400` : ''}
                        `}>
                            {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}